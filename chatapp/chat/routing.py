from django.urls import path
from chat.consumer import ChatConsumer


websocket_urlpatterns = [
    path('chat/', ChatConsumer.as_asgi()),
]