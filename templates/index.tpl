<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title></title>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all">
  </head>
  <body>
    <div id="app"><%= appHtml %></div>
    <script type="text/javascript" charset="utf-8">
      window.appData = <%= appData %>;
      window.config = <%= config %>;
    </script>
    <script src="bundle.js" type="text/javascript" charset="utf-8"></script>
  </body>
</html>
