import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteTakingApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects = [
        {
            "name" : "BMI Calculator App",
            "img" : this.BMICalculator,
            "link" : "https://vaibhav-patil-portfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name" : "Alarm Clock App",
            "img" : this.AlarmClock,
            "link" : "https://vaibhav-patil-portfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name" : "Currency Converter App",
            "img" : this.CurrencyCalculator,
            "link" : "https://vaibhav-patil-portfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name" : "Weather App",
            "img" : this.WeatherApp,
            "link" : "https://vaibhav-patil-portfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name" : "Survey App",
            "img" : this.SurveyApp,
            "link" : "https://vaibhav-patil-portfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KidL00000005PV&surveyName=employee_survey&UUID=10218902-9842-4ffa-9f60-c0c3afe45bdc"
        },
        {
            "name" : "Note-Taking App",
            "img" : this.NoteTakingApp,
            "link" : "https://vaibhav-patil-portfolio-dev-ed.develop.my.site.com/note-taking-app"
        },
    ]
}