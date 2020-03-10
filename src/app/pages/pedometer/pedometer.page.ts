import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Subscription, Observable } from 'rxjs';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  GoogleMapOptions,
  GoogleMapsEvent,
  Encoding,
  ILatLng,
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-pedometer',
  templateUrl: 'pedometer.page.html',
  styleUrls: ['pedometer.page.scss'],
})
export class PedometerPage implements AfterViewInit {
  currentMapTrack: GoogleMap;
  map: GoogleMap;
  myLat: any;
  myLng: any;
  routes: Observable<any>[];

  isTracking = false;
  trackedRoute = [];
  previousTracks = [];

  positionSubscription: Subscription;

  constructor(
    public nacCtrl: NavController,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage
  ) {}

  async ngAfterViewInit() {
    await this.plt.ready().then(() => {
      this.loadHistoricRoutes();
    });
    this.geolocation.getCurrentPosition().then(
      res => {
        this.loadMap(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  loadMap(position: Geoposition) {
    console.log(position);

    this.map = GoogleMaps.create('map');

    this.map.setOptions({
      backgroundColor: 'white',
      controls: {
        compass: true,
        myLocationButton: true,
        myLocation: true,
        indoorPicker: true,
        zoom: true, // Only for Android
      },
      gestures: {
        scroll: true,
        tilt: true,
        rotate: true,
        zoom: true,
      },
      camera: {
        target: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        tilt: 0,
        zoom: 15,
        bearing: 50,
      },
      preferences: {
        building: false,
      },
    });
  }

  loadHistoricRoutes() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    });
  }

  startTracking() {
    this.isTracking = true;
    this.routes = [];

    this.positionSubscription = this.geolocation
      .watchPosition({ timeout: 100000 })
      .pipe(
        filter(p => p.coords !== undefined) //Filter Out Errors
      )
      .subscribe(data => {
        setTimeout(() => {
          this.trackedRoute.push({
            lat: data.coords.latitude,
            lng: data.coords.longitude,
          });
        }, 3000);
      });
  }

  redrawPath(path) {
    this.map.clear();
    this.map.addPolyline({
      points: path,
      geodesic: true,
      strokeColor: '#ff00ff',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    console.log(path);
    this.map.addPolyline(path);
  }

  stopTracking() {
    let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
    this.previousTracks.push(newRoute);
    this.storage.set('routes', this.previousTracks);

    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    //console.log(newRoute);
  }

  showHistoryRoute(route) {
    this.redrawPath(route);
    console.log(this.previousTracks);
  }

  clearTracks() {
    return this.storage.set('routes', null).then(res => {
      return res;
    });
  }
}
