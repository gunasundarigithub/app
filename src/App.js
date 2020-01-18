import React from 'react';
import './App.css'; 
//import SideNavpage from './SideNavpage';
//import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

import {  Inject,ScheduleComponent,Day,Week,Month,Agenda,ResourcesDirective } from '@syncfusion/ej2-react-schedule';
import {  TimelineViews, TimelineMonth,ViewsDirective, ViewDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';


class App extends React.Component{


 ownerData = [
            { OwnerText: 'employee-1', Id: 1, OwnerColor: '#ffaa00',workDays:[1,4,6,7]},
            { OwnerText: 'employee-2', Id: 2, OwnerColor: '#f8a398' },
            { OwnerText: 'employee-3', Id: 3, OwnerColor: '#7499e1' }
        ];

render(){
  return (  
    <ScheduleComponent CurrentView='Month' height='700px'>
    <Inject services={[Day,Week,Month,Agenda]}/>
    <ViewsDirective>
    <ViewDirective option='Month' isSelected={true}/> 
    <ViewDirective option='Day'/>
    <ViewDirective option='Week'/>
    </ViewsDirective>
    <ResourcesDirective>
                <ResourceDirective field='OwnerId' title='Team_Associates'  allowMultiple={true} dataSource={this.ownerData} workDaysField='workDays' textField='OwnerText' idField='Id' colorField='OwnerColor'>
              </ResourceDirective>
            </ResourcesDirective>
            
    </ScheduleComponent>
  )
}

}
export default App;
