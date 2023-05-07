function commentReplyToggle(parent_id){
    const row = document.getElementById(parent_id);

    if(row.classList.contains('d-none')){
        row.classList.remove('d-none');
    }else{
        row.classList.add('d-none');
    }
}

function sharedToggle(parent_id){
    const row = document.getElementById(parent_id);

    if(row.classList.contains('d-none')){
        row.classList.remove('d-none');
    }else{
        row.classList.add('d-none');
    }
}

function showNotification(){
    const row = document.getElementById('notification-container');
    if(row.classList.contains('d-none')){
        row.classList.remove('d-none');
    }else{
        row.classList.add('d-none');
    }
}


function showNotification(){
    const row = document.getElementById('notification-container');
    if(row.classList.contains('d-none')){
        row.classList.remove('d-none');
    }else{
        row.classList.add('d-none');
    }
}

function getCookie(name){
    let cookieValue = null;
    if (document.cookie && document.cookie !==''){
        const cookies = document.cookie.split(';');
        for(let i=0; i < cookies.length; i++){
            const cookie = cookies[i].trim();
            if(cookie.substring(0, name.length + 1) === (name + '=')){
                cookieValue = decodeURIComponent(cookie.substring(name.length+1));
                break;
            }
        }
    }
    return cookieValue;
}

function removeNotification(removeNotificationURL, redirectURL){
    const csrftoken = getCookie('csrftoken');
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == XMLHttpRequest.DONE){
            if(xmlhttp.status == 200){
                window.location.replace(redirectURL);
            }else{
                alert('There was an error');
            }
        }
    };

    xmlhttp.open("DELETE", removeNotificationURL, true);
    xmlhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xmlhttp.send();
}

function formatTags(){
    const elements = document.getElementsByClassName('body');
    for(let i=0; i < elements.length; i++){
        let bodyText = elements[i].children[0].innerText;
        let words = bodyText.split(' ');

        for (let j=0; j < words.length; j++){
            if(words[j][0] == '#'){
                let replacedText = bodyText.replace(/\s\#(.*?)(\s|$)/g,' <a href="/social/explore?query='+words[j].substring(1)+'">'+words[j]+'</a> ');
                elements[i].innerHTML = replacedText;
//                alert(replacedText);
            }
        }
    }
}

formatTags();