import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c';
import SUPERBADGES_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c';
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';
export default class PortfolioOtherDetails extends LightningElement {
    @api recordId
    awards = []
    superbadges = []
    languages = []

    awardIcon = `${PortfolioAssets}/PortfolioAssets/trophy.png`
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`
    languageIcon = `${PortfolioAssets}/PortfolioAssets/language.png`

    @wire(getRecord, {
        recordId : '$recordId',
        fields : [AWARDS_FIELD, SUPERBADGES_FIELD,LANGUAGES_FIELD]
    })OtherFieldsHandler({data , error}){
        if(data){
            console.log('Other Details => ', JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error('Error occurred while fetching other details => ',error)
        }
    }

    formatData(data){
        const {Awards__c,Superbadges__c,Languages__c} = data.fields
        this.awards = Awards__c  && Awards__c.value ? Awards__c.value.split(',') : []
        this.languages = Languages__c && Languages__c.value  ? Languages__c.value.split(',') : []
        this.superbadges = Superbadges__c && Superbadges__c.value ? Superbadges__c.value.split(';') : []
    }
}