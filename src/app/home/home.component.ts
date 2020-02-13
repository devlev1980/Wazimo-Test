import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {IUser} from '../models/user';
import {MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
  dataSource;
  idFilter = new FormControl();
  firstNameFilter = new FormControl();
  lastNameFilter = new FormControl();
  emailFilter = new FormControl();
  genderFilter = new FormControl();
  ipFilter = new FormControl();

  filteredValues = {
    id: '', first_name: '', last_name: '',
    email: '', gender: '', ip_address: '',
    topFilter: false
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<IUser>(data);
      // if (data.length > 0) {
      //   this.dataSource = new MatTableDataSource<IUser>(data);
      //   if (this.dataSource.data.length > 0) {
      //     this.idFilter.valueChanges.subscribe((idFilterValue) => {
      //       this.setFilter('id', idFilterValue);
      //     });
      //     this.firstNameFilter.valueChanges.subscribe((fnFilterValue) => {
      //       this.setFilter('first_name', fnFilterValue);
      //     });
      //
      //     this.lastNameFilter.valueChanges.subscribe((lnFilterValue) => {
      //       this.setFilter('last_name', lnFilterValue);
      //     });
      //
      //     this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
      //       this.setFilter('email', emailFilterValue);
      //     });
      //
      //     this.genderFilter.valueChanges.subscribe((genderFilterValue) => {
      //       this.setFilter('gender', genderFilterValue);
      //     });
      //
      //     this.ipFilter.valueChanges.subscribe((ipFilterValue) => {
      //       this.setFilter('ip_address', ipFilterValue);
      //     });
      //     this.dataSource.filterPredicate = this.customFilterPredicate();
      //
      //   }
      // }
      this.idFilter.valueChanges.subscribe((idFilterValue) => {
        this.setFilter('id', idFilterValue);
      });
      this.firstNameFilter.valueChanges.subscribe((fnFilterValue) => {
        this.setFilter('first_name', fnFilterValue);
      });

      this.lastNameFilter.valueChanges.subscribe((lnFilterValue) => {
        this.setFilter('last_name', lnFilterValue);
      });

      this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
        this.setFilter('email', emailFilterValue);
      });

      this.genderFilter.valueChanges.subscribe((genderFilterValue) => {
        this.setFilter('gender', genderFilterValue);
      });

      this.ipFilter.valueChanges.subscribe((ipFilterValue) => {
        this.setFilter('ip_address', ipFilterValue);
      });
      this.dataSource.filterPredicate = this.customFilterPredicate();


    });


  }

  setFilter(key, filterValue) {
    this.filteredValues[key] = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  applyFilter(event) {
    // const filter = {
    //   id: (event.target as HTMLInputElement).value.trim().toLowerCase(),
    //   first_name: (event.target as HTMLInputElement).value.trim().toLowerCase(),
    //   last_name: (event.target as HTMLInputElement).value.trim().toLowerCase(),
    //   email: (event.target as HTMLInputElement).value.trim().toLowerCase(),
    //   gender: (event.target as HTMLInputElement).value.trim().toLowerCase(),
    //   ip: (event.target as HTMLInputElement).value.trim().toLowerCase(),
    //   topFilter: true
    // };


    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: IUser, filter: string): boolean => {
      let searchString = JSON.parse(filter);
      let idFound = data.id.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1;
      let firstNameFound = data.first_name.toString().trim().indexOf(searchString.position) !== -1;
      let lastNameFound = data.last_name.toString().trim().indexOf(searchString.position) !== -1;
      let emailFound = data.email.toString().trim().indexOf(searchString.position) !== -1;
      let genderFound = data.gender.toString().trim().indexOf(searchString.position) !== -1;
      let ipFound = data.ip_address.toString().trim().indexOf(searchString.position) !== -1;
      if (searchString.topFilter) {
        return idFound || firstNameFound || lastNameFound || emailFound || genderFound || ipFound;
      } else {
        return idFound && firstNameFound && lastNameFound && emailFound && genderFound && ipFound;
      }
    };
    return myFilterPredicate;
  }


}
