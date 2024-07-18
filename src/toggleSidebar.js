import { getElement } from './utils.js';

const togglenav=getElement('.toggle-nav')
const sidebarOverlay=getElement('.sidebar-overlay')
const closeBtn=getElement('.sidebar-close')

togglenav.addEventListener("click",()=>{
    sidebarOverlay.classList.add('show')
})
closeBtn.addEventListener("click",()=>{
    sidebarOverlay.classList.remove('show')
})