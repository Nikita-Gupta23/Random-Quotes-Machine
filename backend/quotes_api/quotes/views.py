import random
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Quote
from .serializers import QuoteSerializer

@api_view(['GET'])
def random_quote(request):
    quotes = Quote.objects.all()
    if quotes.exists():
        quote = random.choice(quotes)
        serializer = QuoteSerializer(quote)
        return Response(serializer.data)
    return Response({"error": "No quotes found"}, status=404)