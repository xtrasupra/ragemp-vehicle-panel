import React, { Component } from "react";

import Weather from "./svg/Weather.svg";
import Engine from "./svg/Engine.svg"
import CruiseControl from './svg/CruiseControl.svg'
import Light from './svg/Light.svg'
import Line from './svg/Line.svg'
import Speed from './svg/Speed.svg'
import Road from './svg/Road.svg'
import Car from './img/Car.png'
import DoorRight from './svg/DoorRight.svg'
import DoorLeft from './svg/DoorLeft.svg'
import Hood from './svg/Hood.svg'
import Thunk from './svg/Thunk.svg'
import Salon from './svg/Salon.svg'
import LightActive from './svg/LightActive.svg'
import LightActive2 from './svg/LightActive2.svg'
import SalonActive from './svg/SalonActive.svg'

//CSS
import './css/panel.css'
import './css/font.css'

class Auto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            panel_info: [
                {name_car: "VIP", weather: "20"}
            ],
            car_speedInfo: [
                {speed: "352", mileage: "43643235"}
            ],
            isLightOn: false,
            isLightOn2: false,
            salonLight: false,
        };
    }

    salonLight = () => {
        this.setState(prevState => ({
            salonLight: !prevState.salonLight
        }));
    }

    toggleLight = () => {
        this.setState(prevState => {
          const isLightOn = !prevState.isLightOn;
      
          return {
            isLightOn,
            isLightOn2: isLightOn ? prevState.isLightOn2 : false
          };
        });
      }
      
      toggleLight2 = () => {
        this.setState(prevState => {
          if (!prevState.isLightOn) return null;
      
          return {
            isLightOn2: !prevState.isLightOn2
          };
        });
      }

    setHide = () => {
        this.setState({
            show: false,
        })

        // try {
        //     mp.trigger('');
        // } catch (e) {
        //     console.log(e);
        // }
    }

    render () {
        if (!this.state.show) {return null};
        return (
            <div className="background-tablet--1">
                <div className="case-tablet-car--2">
                    {this.state.panel_info.map((info) => (
                        <div className="weather-info--3">
                            <h className="text-car-name--4">{info.name_car}</h>
                            <h className="text-weather-info--5">{info.weather}°С <img className="weather-svg--6" src={Weather} alt=""/></h>
                        </div>
                    ))}
                <div className="case-general-button--7">
                    <h className="info-car-button--8">Режимы авто</h>
                    <div className="button-grid--9">
                        <button>Двигатель <img alt="" src={Engine}/></button>
                        <button>Круиз контроль <img alt="" src={CruiseControl}/></button>
                        <button onClick={this.toggleLight}>Ближний свет <img alt="" src={Light}/></button>
                        <button onClick={this.toggleLight2}>Дальний свет <img alt="" src={Light}/></button>
                    </div>
                </div>
                    {this.state.car_speedInfo.map((speedInfo) => (
                        <div className="case-info-speed-car--10">
                            <img alt="" className="line-svg--11" src={Line}/>
                            <div className="icon-background--12"><img className="speed-svg"alt="" src={Speed}/></div>
                            <div className="icon-background--13"><img className="speed-svg"alt="" src={Speed}/></div>
                            <h className="text-speed-1--14">Макс. скорость</h>
                            <h className="text-speed--15">{speedInfo.speed} K/MH</h>
                            <h className="text-speed-2--16">Пробег авто</h>
                            <h className="text-mileage--17">{speedInfo.mileage} KM</h>
                        </div>
                    ))}
{/**/}
                <div className="car-panel-general--18">
                    <div className="button-grid-door--21">
                        {this.state.isLightOn && (
                            <img className="light-active-svg--25" alt="" src={LightActive}/>
                        )}
                        {this.state.isLightOn2 && (
                            <img className="light-active-2-svg--26" alt="" src={LightActive2}/>
                        )}
                        {this.state.salonLight && (
                            <img className="salon-active-svg--27" alt="" src={SalonActive}/>
                        )}
                        <button className="button-car-panel--24"><img alt="" src={DoorLeft}/></button>
                        <button className="button-car-panel--24"><img alt="" src={DoorRight}/></button>
                        <button className="button-car-panel--24"><img alt="" src={DoorLeft}/></button>
                        <button className="button-car-panel--24"><img alt="" src={DoorRight}/></button>
                        <button className="light-car--22" onClick={this.salonLight}><img alt="" src={Salon}/></button>
                        <div className="trunk-hood-buuton--23">
                            <button className="button-car-panel--24"><img alt="" src={Hood}/></button>
                            <button className="button-car-panel--24"><img alt="" src={Thunk}/></button>
                        </div>
                    </div>
                    <img className="car-png--19" alt="" src={Car}/>
                    <img className="road-img--20" alt="" src={Road}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Auto;