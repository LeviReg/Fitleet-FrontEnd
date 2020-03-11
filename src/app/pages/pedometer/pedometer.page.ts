import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Subscription, Observable } from 'rxjs';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { filter } from 'rxjs/operators';
import { getDistance, getPathLength } from 'geolib';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  GoogleMapOptions,
  GoogleMapsEvent,
  Encoding,
  ILatLng,
  LatLng,
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-pedometer',
  templateUrl: 'pedometer.page.html',
  styleUrls: ['pedometer.page.scss'],
})
export class PedometerPage {
  currentMapTrack: GoogleMap;
  map: GoogleMap;
  myLat: any;
  myLng: any;
  routes: Observable<any>[];
  isTracking = false;
  trackedRoute = [];
  previousTracks: any = [];
  positionSubscription: Subscription;

  constructor(
    public nacCtrl: NavController,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage
  ) {}
  // ion view did enter is used, to render map each time the page is navigated into
  async ionViewDidEnter() {

    await this.plt.ready().then(() => {
      this.loadPreviousRuns();
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
  // this loads the map
  loadMap(position: Geoposition) {
    //console.log(position);
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
        zoom: 16,
        bearing: 50,
      },
      preferences: {
        building: false,
      },
    });
  }
  // this loads the previous workouts
  loadPreviousRuns() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    });
  }
  //starts workout based on current geolocation
  startWorkout() {
    this.isTracking = true;
    this.routes = [];

    this.positionSubscription = this.geolocation
      .watchPosition()
      .pipe(
        filter(p => p.coords !== undefined) //Filter Out Errors
      )
      .subscribe(data => {
        setTimeout(() => {
          this.trackedRoute.push({
            lat: data.coords.latitude,
            lng: data.coords.longitude,
          });

          this.redrawPath(this.trackedRoute);
        }, 3000);
      });
  }
  //stops workout and logs the route you took
  stopWorkout() {
    let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
    let distance = getPathLength(newRoute.path);
    //let steps = getPathLength(newRoute.path);
    console.log('Distance: ', distance / 1000, 'KM');
    console.log('Distance: ', distance / 0.27, 'Steps');
    this.previousTracks.push(newRoute);
    this.storage.set('routes', this.previousTracks);
    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    this.map.clear();
  }
  //redraws previous track that you ran
  redrawPath(path) {
    this.map.addPolyline({
      points: path,
      geodesic: true,
      strokeColor: '#ff00ff',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    this.map.addPolyline(path);
  }
  //redraws the old route on the map
  showOldWorkouts(route) {
    this.map.clear();
    this.redrawPath(route);
    //console.log(this.previousTracks);
  }
  //clears old workouts that were saved to local storage
  clearOldWorkouts() {
    return this.storage.set('routes', null).then(res => {
      return res;
    });
  }
}
