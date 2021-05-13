<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        {{-- Import TailwindCss --}}
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        
        {{-- Import vue components --}}
        <script src="{{ mix('js/app.js') }}" defer></script>

        <title>BLog</title>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
    </body>
</html>
