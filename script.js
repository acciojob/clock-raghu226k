
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clock Timer</title>
  <style>
    #timer {
      font-size: 24px;
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
  </style>
</head>
<body>
  <p id="timer">Loading time...</p>

  <script>
    function updateTimer() {
      const now = new Date();
      const formattedTime = now.toLocaleString(); 
      document.getElementById('timer').textContent = formattedTime;
    }

    
    updateTimer();

    
    setInterval(updateTimer, 1000);
  </script>
</body>
</html>
