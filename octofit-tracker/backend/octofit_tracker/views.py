from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer
from .models import User, Team, Activity, Leaderboard, Workout
import os

@api_view(['GET'])
def api_root(request, format=None):
    # Codespace固定URLとlocalhost両対応
    codespace_url = 'https://didactic-zebra-5rj9qj5vpwr24j75-8000.app.github.dev/'
    local_url = 'http://localhost:8000/'
    # X-Forwarded-Hostがcodespaceならcodespace_url、なければlocalhost
    forwarded_host = request.META.get('HTTP_X_FORWARDED_HOST')
    if forwarded_host and 'didactic-zebra-5rj9qj5vpwr24j75-8000.app.github.dev' in forwarded_host:
        base_url = codespace_url
    elif request.get_host().startswith('didactic-zebra-5rj9qj5vpwr24j75-8000.app.github.dev'):
        base_url = codespace_url
    else:
        base_url = local_url
    return Response({
        'users': base_url + 'api/users/?format=api',
        'teams': base_url + 'api/teams/?format=api',
        'activities': base_url + 'api/activities/?format=api',
        'leaderboard': base_url + 'api/leaderboard/?format=api',
        'workouts': base_url + 'api/workouts/?format=api'
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
