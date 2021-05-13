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
        <div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img class="h-48 w-full object-cover md:w-48" src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F618711%2Farrow-angles-up-on-a-green-stock-chart.jpg&w=700&op=resize" alt="Man looking at item at a store">
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                  <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
              </div>
            </div>
        </div>
    </body>
</html>
