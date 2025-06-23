import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isOneSongExist: boolean = false;
  isOneUserExist: boolean = false;
  users: string = '';
  song: string = '';
  usersData: Array<{users:string, song:string}> = [];
  
  openCurrentSong(){
    console.log('The current song is: blabla');
    if(this.isOneUserExist){
      this.isOneSongExist = true;
    }
  }

  createPlaylist(){
    console.log('A user want to create playlist');
    this.openPopUp();
    this.isOneUserExist = this.isTableHaveAtListOneRow();
  }

  editRow(){
    console.log('user want to edit');
  }

  deleteRow(){
    console.log('user want to delete');
  }

  openPopUp(){
    // inside the pop up will have the optin to write the names.
    // after that will have the optin to choose a song in you tube.
    // after added the 'usersData' will be contain the new row.

    this.mockDataIntoUserTable();
  }

  isTableHaveAtListOneRow(){
    if(this.usersData && this.usersData.length > 0){
      return true;
    }
    return false;
  }

  mockDataIntoUserTable(){
    this.usersData.push(
      {users: 'kk', song: 'jkg'},
      {users: 'khjgx', song: 'edfg'},
      {users: 'lkjhg', song: 'sd'},
      {users: 'ked', song: 'ij'}
    )
  }
}
