<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BLUEPAY 2026</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background-color: #0a27ff;
      color: white;
    }

    .container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    header {from-white to-blue-200 bg-clip-text text-transparent text-sm font-light">
                2026
      padding: 16px;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      position: relative;
    }

    .logo span.blue {
      color: #ffffff;
    }

    .logo span.pay {
      color: #b3ccff;
    }

    .logo span.year {
      font-size: 14px;
      margin-left: 4px;
      color: #dbe7ff;
    }

    .divider {
      height: 2px;
      width: 100%;
      background: linear-gradient(to right, transparent, #9ec5ff, transparent);
      margin-top: 4px;
    }

    main {
      flex: 1;
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      max-width: 420px;
    }

    .content img {
      display: block;
      margin: 0 auto 40px;
      max-width: 100%;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 32px;
    }

    .btn {
      display: inline-block;
      background: white;
      color: #0a27ff;
      padding: 14px 32px;
      border-radius: 999px;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      background: #f2f2f2;
    }
  </style>
</head>
<body>

  <div class="container">

    <!-- HEADER -->
    <header>
      <div class="logo">
        <span class="blue">BLUE</span>
        <span class="pay">PAY</span>
        <span class="year">2026</span>
        <div class="divider"></div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main>
      <div class="content">

        <!-- UPDATED IMAGE -->
        <img
          src="/lovable-uploads/NEW_2026_IMAGE.png"
          alt="BLUEPAY2026"
        />

        <h1>Get Your Account Ready And Instantly.</h1>

        <p>
          Get your account ready and instantly start buying, selling airtime and data
          online and start paying all your bills in cheaper price.
        </p>

        <button class="btn" onclick="window.location.href='register.html'">
          Get Started
        </button>

      </div>
    </main>

  </div>

</body>
</html>
