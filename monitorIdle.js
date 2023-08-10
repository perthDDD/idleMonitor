  let inactivityTime = function() {
  let time;
      window.onload = resetTimer;
      document.onmousemove = resetTimer;
      document.onkeypress = resetTimer;
      function logout() {
        alert("You are now logged out.")
      }
      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 20000)
      }
    };
    window.onload = function() {
      inactivityTime();
  }
