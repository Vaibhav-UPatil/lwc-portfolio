import { LightningElement, api } from 'lwc';

export default class PortfolioStringToHtml extends LightningElement {
    @api content
    isloaded = false
    renderedCallback(){
        if(this.isloaded){
            return false
        }
        if(this.content){
            this.isloaded = true
            const container = this.template.querySelector('.htmlContainer')
            container.innerHTML = this.content
        }
    }
}