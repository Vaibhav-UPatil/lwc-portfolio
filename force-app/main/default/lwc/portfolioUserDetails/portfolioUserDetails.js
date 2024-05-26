import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api objectApiName
    @api recordId
    @api resumeUrl
    downloadResume(){
        window.open(this.resumeUrl/*"https://github.com/Vaibhav-UPatil/vaibhav-resume/raw/main/Vaibhav_Patil_SF_Copy.pdf"*/,"_blank")
    }
}