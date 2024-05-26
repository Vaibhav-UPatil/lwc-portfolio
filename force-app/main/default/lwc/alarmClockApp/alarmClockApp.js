import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClockApp extends LightningElement {
    clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png'
    ringtone = new Audio(AlarmClockAssets+'/AlarmClockAssets/Clocksound.mp3')
    currentTime ='';
    hours = [];
    minutes = [];
    meridiems = ['AM','PM'];
    hourSelected;
    minSelected;
    meridiemSelected;
    alarmTime;
    isAlarmSet = false;
    isAlarmTriggered = false;
    get isFieldNotSelected() {
        return !(this.hourSelected && this.minSelected && this.meridiemSelected);
    }
    get shakeImage() {
        return this.isAlarmTriggered ? 'shake' : ''
    }
    connectedCallback() {        
        this.createHoursOptions();
        this.createMinutesOptions();
        this.currentTimeHandler();
    }

    currentTimeHandler() {
        setInterval(() => {
            let dateTime = new Date();
            let hour = dateTime.getHours();
            let min = dateTime.getMinutes();
            let sec = dateTime.getSeconds();
            let ampm = 'AM';
            if(hour === 0) {
                hour = 12;
            } else if(hour === 12) {
                ampm = 'PM';
            } else if(hour >= 12) {
                hour = hour -12;
                ampm = 'PM';
            }
            hour = hour<10 ? "0"+hour : hour;
            min = min<10 ? "0"+min : min;
            sec = sec<10 ? "0"+sec : sec;

            this.currentTime = `${hour}:${min}:${sec} ${ampm}`
            if(this.alarmTime === `${hour}:${min} ${ampm}`) {
                console.log('Alarm Triggered!!!')
                this.isAlarmTriggered = true
                this.ringtone.play()
                this.ringtone.loop = true
            }
        }, 1000);
        
    }

    createHoursOptions() {
        for(let i=1; i<=12; i++) {
            let val = i<10 ? '0'+i : i;
            this.hours.push(val);
        }
    }
    createMinutesOptions() {
        for(let i=0; i<=59; i++) {
            let val = i<10 ? '0'+i : i;
            this.minutes.push(val);
        }
    }
    optionHandler(event) {
        const{label , value} = event.detail;
        if(label === "Hour(s)") {
            this.hourSelected = value;
        } else if(label === "Minutes(s)") {
            this.minSelected = value;
        } else if(label === "AM/PM") {
            this.meridiemSelected = value;
        }

        // console.log('Hour(s) Selected => ',this.hourSelected);
        // console.log('Minute(s) Selected => ',this.minSelected);
        // console.log('Meridiem Selected => ',this.meridiemSelected);

    }

    setAlarmHandler() {
        this.alarmTime = `${this.hourSelected}:${this.minSelected} ${this.meridiemSelected}`
        this.isAlarmSet = true
    }

    clearAlarmHandler() {
        this.isAlarmSet = false;
        this.alarmTime = '';
        this.isAlarmTriggered = false;
        this.ringtone.pause()
        const elements = this.template.querySelectorAll('c-clock-dropdown');
        Array.from(elements).forEach(element => {
            element.reset("");
        });
    }

}