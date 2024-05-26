import { LightningElement, wire ,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import SALESFORCE_CERTS from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c'
import OTHER_CERTS from '@salesforce/schema/Portfolio__c.OtherCertifications__c'
export default class PortfolioCertifications extends LightningElement {
    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    sfCertsList = []
    otherCertsList = []
    @api recordId
    
    @wire(getRecord,{
        recordId : '$recordId',
        fields : [SALESFORCE_CERTS, OTHER_CERTS]
    })CertsHandler({data , error}) {
        if(data){
            console.log('Certs Data => ',JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error('Error occured while fetching certification details => ',error)
        }
    }

    formatData(data) {
        const {SalesforceCertifications__c,OtherCertifications__c} = data.fields
        this.sfCertsList = SalesforceCertifications__c ? SalesforceCertifications__c.value.split(';').map(item => {
            return `Salesforce Certified ${item}`
        }) : []

        this.otherCertsList = OtherCertifications__c ? OtherCertifications__c.value.split(',') : []
    }

}