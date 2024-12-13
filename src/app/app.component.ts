import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../environment/environment';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CalendarModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  date3: Date = new Date();
  formGroup!: FormGroup; 

  viewMode: string = 'map'; // To toggle between 'map' and 'list' view
  dateSelected: Date | null = null;
  filters: string[] = ['Filter 1', 'Filter 2', 'Filter 3'];
  selectedFilter: string = this.filters[0];
  mockData = [
    { id: 1, title: 'Work Flow: Requires Location', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', due_date: '06 December', status: 'Uncomplete', lat: 43.61000263903802, lng: -79.65145363011293 },
    { id: 2, title: 'Work Flow: Requires Location', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', due_date: '06 December', status: 'Uncomplete', lat: 43.595051955159626, lng: -79.66746610957343 },
    { id: 3, title: 'Work Flow: Requires Location', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', due_date: '06 December', status: 'Low Risk', lat: 43.578662012192886, lng: -79.65296516207383 },
    { id: 4, title: 'Work Flow: Requires Location', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', due_date: '06 December', status: 'Uncomplete', lat: 43.60321697972078, lng: -79.60386165613524 },
    { id: 5, title: 'Work Flow: Requires Location', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', due_date: '06 December', status: 'Needs Review', lat:  43.61337051059693, lng: -79.69151211188377 },
   
  ];

  mockTableData = [
    { id: 1, task: 'Work Flow: Requires Location',  from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 6, 02:38 AM', status: 'Low Risk', address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',lat: 43.61000263903802, lng: -79.65145363011293, is_due: true },
    { id: 2, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 6, 01:40 PM', status: 'Low Risk', address: '1901 Thornridge Cir. Shiloh, Hawaii 81063', lat: 43.595051955159626, lng: -79.66746610957343 , is_due: false},
    { id: 3, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 7, 01:14 AM', status: 'Uncomplete', address: '4140 Parker Rd. Allentown, New Mexico 31134', lat: 43.578662012192886, lng: -79.65296516207383, is_due: true},
    { id: 4, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 7, 01:14 AM', status: 'Unassigned', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', lat: 43.60321697972078, lng: -79.60386165613524, is_due: false },
    { id: 5, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 7, 03:56 AM', status: 'Unassigned', address: '4517 Washington Ave. Manchester, Kentucky 39495', lat:  43.61337051059693, lng: -79.69151211188377, is_due: false },
    { id: 6, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 7, 04:20 PM', status: 'Uncomplete', address: '8502 Preston Rd. Inglewood, Maine 98380', lat:  43.61337051059693, lng: -79.69151211188377,is_due: true},
    { id: 7, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 8, 04:12 AM', status: 'Uncomplete', address: '8502 Preston Rd. Inglewood, Maine 98380', lat:  43.61337051059693, lng: -79.69151211188377, is_due: false },
    { id: 8, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 8, 04:37 AM', status: 'Low Risk', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', lat:  43.61337051059693, lng: -79.69151211188377, is_due: false},
    { id: 9, task: 'Work Flow: Requires Location', from: 'zendu@zendu.com', to: 'tracy@zenduit.com', due_date: 'Oct 9, 06:12 PM', status: 'Low Risk', address: '2118 Thornridge Cir. Syracuse, Connecticut 35624', lat:  43.61337051059693, lng: -79.69151211188377, is_due: false },
   
  ];
  constructor(private fb: FormBuilder) { }

  map: mapboxgl.Map | undefined; 
  style = 'mapbox://styles/mapbox/light-v11';
  lat: number = 43.58440603367843;
  lng: number = -79.64215681854077;
  options: { label: string; value: string }[] = [];

  ngOnInit() {
    this.formGroup = this.fb.group({
      date3: new FormControl('', [Validators.required])
  });
   
  }

  ngAfterViewInit() {
    this.initializeMap();
    this.options.push({
      label: 'Test',
      value: 'Test',
    });
  }
  initializeMap() {
    this.map = new mapboxgl.Map({
      accessToken: environment.accessToken,
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });
    var  that:any = this;
    this.map.on('load', function () {
      that.map.resize();
      that.addMarkers();
    });
  }
  
  addMarkers() {
    // Add markers for each location from the mock data
    var that: any = this;
    this.mockData.forEach(place => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      new mapboxgl.Marker(el).setLngLat([place.lng, place.lat]).addTo(that.map);
      //this.map.addObject(marker);
    });
  }

  exportData() {
    console.log('Exporting data...');
    console.log('Data', this.mockTableData);
    alert('Export functionality triggered!, please check console');
  }

  onDateChange(event: any) {
    console.log('Selected Date:', event.value);
  }

  toggleView() {
    this.viewMode = this.viewMode === 'map' ? 'list' : 'map';
    if (this.viewMode == 'map') {
        setTimeout(() => {
          this.initializeMap();
      },500);
    }
  }

}
