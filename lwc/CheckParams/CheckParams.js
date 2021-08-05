/**
 * @description       : 
 * @author            : TQDev
 * @group             : 
 * @last modified on  : 08-05-2021
 * @last modified by  : TQDev
**/
import { LightningElement ,api} from 'lwc';
import { FlowAttributeChangeEvent,FlowNavigationNextEvent } from 'lightning/flowSupport';
export default class CheckParams extends LightningElement {
    @api pagesource;
    renderedDone = false;
    renderedCallback(){
        if(!this.renderedDone){
            this.renderedDone = true;
            let param = (new URL(window.location.href)).searchParams.get('pagesource');
            this.dispatchEvent(new FlowAttributeChangeEvent('pagesource', param));
            if(param) this.dispatchEvent(new FlowNavigationNextEvent());            
        }
    }
}