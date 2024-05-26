import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS = [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institution Name', fieldName: 'InstitutionName' },
    { label: 'Year of Graduation', fieldName: 'PassingYear' },
    { label: 'Grades', fieldName: 'Grades' },
];
export default class PortfolioEducation extends LightningElement {
    tableData = []
    columns = COLUMNS
    @api recordId
    @wire(getRelatedListRecords, {
        parentRecordId : '$recordId',
        relatedListId : 'Education__r',
        fields : ['Education__c.InstitutionName__c','Education__c.Title__c','Education__c.PassingYear__c','Education__c.Grades__c'],
        sortBy: ['Education__c.PassingYear__c']
    })EducationHandler({data , error}){
        if(data){
            console.log('Education Data => ',JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error('Error occured while fetching education details => ',error)
        }
    }

    formatData(data){
        this.tableData = [...data.records].reverse().map(item => {
            let Id = item.id
            const {InstitutionName__c,Title__c,PassingYear__c,Grades__c} = item.fields
            let Education = Title__c.value
            let InstitutionName = InstitutionName__c.value
            let PassingYear = PassingYear__c.value
            let Grades = Grades__c.value
            return {Id, Education, InstitutionName, PassingYear,Grades}
        })
        console.log('Table Data => ',JSON.stringify(this.tableData))
    }
}