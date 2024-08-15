import {data} from './data.js';

let html='';
data.forEach((item)=>{
     html+=`<div>
    <a href="${item.link}">
    <div>
        <img src="${item.image}" class="thumbnail">
    </div>
    <div class="imageinfo">
        <div>
            <img src="${item.channelimg}" class="profile">
        </div>
        <div class="word">
            <div class="title">
                ${item.title}
            </div>
            
            <div class="channel">
                ${item.channel}
            </div>
            <div class="views">
                ${item.views} • ${item.time}
            </div>
        </div>
    </div>
    </a>
</div>`;
});

document.querySelector('.js-grid').innerHTML=html;