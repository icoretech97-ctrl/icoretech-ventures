const BUSINESS_WA = "233535470273";
const SERVICES = {
 graphic:{title:"Graphic Design Order",fields:[['designType','Type of graphic design','select',['Promotional graphic','Business/advertising design','Event flyer','Poster','Other graphic design'],true],['purpose','Purpose of the design','text','',true],['content','Text/content to include','textarea','',true],['colours','Preferred colours','text','e.g. blue, black and white',false],['instructions','Design instructions','textarea','',false],['reference','Reference artwork (describe or mention attachment)','text','You can send the reference in WhatsApp after opening it',false]]},
 dtf:{title:"DTF & Jersey/T-Shirt Customization Order",fields:[['itemType','Item type','select',['Jersey','T-shirt'],true],['size','Size','text','e.g. S, M, L, XL or custom',true],['namePrint','Name to print','text','',false],['numberPrint','Number to print','text','',false],['artwork','Design or artwork requirements','textarea','Describe your artwork or design idea',true],['instructions','Additional instructions','textarea','Placement, colours, print details, etc.',false]]},
 banner:{title:"Banner & Poster Printing Order",fields:[['format','What do you need?','select',['FOR SALE poster','Business promotional banner','Event banner','Advertising poster','Other banner/poster'],true],['purpose','Purpose','text','',true],['dimensions','Required dimensions','text','e.g. width × height and unit',true],['displayText','Text to display','textarea','',true],['design','Preferred design and colours','textarea','',false],['instructions','Additional instructions','textarea','',false]]},
 phone:{title:"Phone Repair Request",fields:[['brand','Phone brand','text','e.g. Samsung, Apple, Tecno',true],['model','Phone model','text','',true],['problem','Description of the problem','textarea','Explain what is happening',true],['details','Additional details','textarea','When it started, any error messages, etc.',false]]},
 computer:{title:"Laptop & Desktop Repair Request",fields:[['deviceType','Device type','select',['Laptop','Desktop computer'],true],['brandModel','Brand and model','text','',true],['problem','Description of the problem','textarea','Explain the fault or symptoms',true],['technical','Additional technical information','textarea','Operating system, error messages, recent changes, etc.',false]]},
 software:{title:"Windows & Software Installation Request",fields:[['deviceType','Device type','select',['Laptop','Desktop computer','Other compatible device'],true],['model','Device brand and model','text','',true],['requested','Requested Windows version or software','textarea','Specify the version or software name',true],['requirements','Additional requirements','textarea','',false]]},
 book:{title:"Book Design & Production Request",fields:[['bookType','Type of book','text','e.g. novel, textbook, devotional, journal',true],['bookTitle','Book title','text','',true],['pages','Approximate page count','number','',false],['cover','Cover design requirements','textarea','',true],['production','Formatting and production requirements','textarea','',false],['instructions','Additional instructions','textarea','',false]]},
 certificate:{title:"Certificate Services Enquiry",fields:[['certificateType','Certificate type','select',['Birth certificate-related assistance','School certificate','Academic certificate','Other certificate-related request'],true],['purpose','Purpose of the request','text','',true],['assistance','What legitimate assistance do you need?','select',['Design assistance','Preparation assistance','Guidance on obtaining an official certificate','Other legitimate certificate-related assistance'],true],['details','Relevant details','textarea','Describe exactly what you need',true],['instructions','Additional instructions','textarea','',false]]}
};
const dialog=document.getElementById('orderDialog');
const form=document.getElementById('orderForm');
const fieldsBox=document.getElementById('serviceFields');
let selectedService='';
const labels={fullName:'Customer full name',contact:'WhatsApp/contact number',description:'Overall requirements / additional instructions'};
function fieldMarkup([id,label,type,extra,required]){
 const req=required?' required':''; const mark=required?' <span class="required-mark">*</span>':'';
 let control='';
 if(type==='select') control=`<select id="${id}" name="${id}"${req}><option value="">Choose an option</option>${extra.map(v=>`<option>${v}</option>`).join('')}</select>`;
 else if(type==='textarea') control=`<textarea id="${id}" name="${id}" placeholder="${extra||''}"${req}></textarea>`;
 else control=`<input id="${id}" name="${id}" type="${type}" placeholder="${extra||''}"${req}${type==='number'?' min="1"':''}>`;
 return `<div class="form-field"><label for="${id}">${label}${mark}</label>${control}</div>`;
}
function openOrder(id){
 const service=SERVICES[id]; if(!service)return; selectedService=id;
 document.getElementById('dialogTitle').textContent=service.title;
 const common=[['fullName','Customer full name','text','Enter your full name',true],['contact','WhatsApp/contact number','tel','Include country code if outside Ghana',true]];
 const tail=[['description','Overall requirements / additional instructions','textarea','Anything else the team should know?',false]];
 fieldsBox.innerHTML=common.map(fieldMarkup).join('')+service.fields.map(fieldMarkup).join('')+tail.map(fieldMarkup).join('');
 if(typeof dialog.showModal==='function') dialog.showModal(); else dialog.setAttribute('open','');
 document.getElementById('fullName').focus();
}
document.querySelectorAll('[data-order]').forEach(btn=>btn.addEventListener('click',()=>openOrder(btn.dataset.order)));
function addLine(lines,label,value){if(value&&String(value).trim())lines.push(`${label}: ${String(value).trim()}`)}
form.addEventListener('submit',event=>{
 event.preventDefault(); if(!form.reportValidity())return;
 const service=SERVICES[selectedService]; if(!service)return;
 const lines=['Hello iCoreTech Ventures, I would like to place a service request.','',`SERVICE: ${service.title}`,''];
 const data=new FormData(form); const names={fullName:'Customer name',contact:'WhatsApp/contact number',designType:'Type of graphic design',purpose:'Purpose',content:'Text/content',colours:'Preferred colours',instructions:'Additional instructions',reference:'Reference artwork',itemType:'Item type',size:'Size',namePrint:'Name to print',numberPrint:'Number to print',artwork:'Design/artwork requirements',format:'Banner/poster type',dimensions:'Required dimensions',displayText:'Text to display',design:'Preferred design and colours',brand:'Phone brand',model:'Device model',problem:'Problem description',details:'Relevant details',deviceType:'Device type',brandModel:'Brand and model',technical:'Technical information',requested:'Requested Windows/software',requirements:'Additional requirements',bookType:'Book type',bookTitle:'Book title',pages:'Approximate page count',cover:'Cover design requirements',production:'Formatting/production requirements',certificateType:'Certificate type',assistance:'Requested legitimate assistance',description:'Overall requirements / additional instructions'};
 for(const [key,value] of data.entries()) addLine(lines,names[key]||key,value);
 lines.push('','Please let me know the availability, scope and next steps.');
 const url=`https://wa.me/${BUSINESS_WA}?text=${encodeURIComponent(lines.join('\n'))}`;
 window.open(url,'_blank','noopener,noreferrer');
});
function closeDialog(){if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');}
document.getElementById('closeDialog').addEventListener('click',closeDialog);
document.getElementById('cancelOrder').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog)closeDialog()});
document.getElementById('feedbackForm').addEventListener('submit',event=>{
 event.preventDefault();const name=document.getElementById('feedbackName').value.trim();const contact=document.getElementById('feedbackContact').value.trim();const type=document.getElementById('feedbackType').value;const message=document.getElementById('feedbackMessage').value.trim();if(!message){document.getElementById('feedbackMessage').focus();return;}
 const text=['Hello iCoreTech Ventures,','',`Feedback type: ${type}`,`Name: ${name||'Not provided'}`,`Contact: ${contact||'Not provided'}`,'',message].join('\n');
 window.open(`https://wa.me/${BUSINESS_WA}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');
});
document.getElementById('year').textContent=new Date().getFullYear();
const navLinks=[...document.querySelectorAll('.nav a')];
if('IntersectionObserver' in window){const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(a=>{if(a.getAttribute('href')==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-25% 0px -65% 0px'});sections.forEach(s=>observer.observe(s));}
