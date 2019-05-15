export function setCookie(cname, cvalue, hours) {
    console.log('enters');
    let d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    console.log(expires);
    document.cookie = cname +'='+ cvalue +';'+ expires + ';path=/';
}

    export function getCookie(cname) {
        console.log(document.cookie);
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export function checkCookie() {
    let user = getCookie('token');
    if (user !== '') {
        return user;
    } else {
        return null;
    }

}

export function deleteCookie(cname) {
    let expires = "Expires=Thu, 01 Jan 1970 00:00:01 GMT";
    document.cookie = cname +'=;'+ expires + ';path=/';
}
