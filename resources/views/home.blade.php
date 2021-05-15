<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        {{-- Import TailwindCss --}}
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        
        {{-- Import vue components --}}
        <script src="{{ mix('js/app.js') }}" defer></script>

        <title>BLog</title>
    </head>
    <body>
        <div id="app">
            <navbar></navbar>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

        <style>
            .fade-enter-active,
            .fade-leave-active {
              transition: opacity 0.5s;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
              opacity: 0;
            }
        </style>
    </body>
</html>
