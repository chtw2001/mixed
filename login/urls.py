from django.urls import path, include
from .views import UserCreate, ProfileList, LoginView
from rest_framework_simplejwt import views as jwt_views
from .views import HelloView, BlacklistRefreshView
from rest_framework_simplejwt.views import (
    TokenObtainSlidingView,
    TokenRefreshSlidingView,
)

urlpatterns = [
    path('signup/', UserCreate.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/<int:pk>/', ProfileList.as_view()), # <int:pk> 써서 해당 계정 정보만 보여주게 해야함
                                             # => 권한이 있는지 확인 후 보여주기 or 안보여주기
    path('', include('rest_framework.urls')),
    path('api/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_verify'),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # => 로그인시 access_token, refresh_token 발급

    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # => body에 "refresh" : refresh_token 넣고 post 요청시 새로운 access_token 발급
    # => 이전의 access_token도 blacklist로 넣고싶은데 그건 아직 못함

    path('api/logout/', BlacklistRefreshView.as_view(), name="logout"), 
    # => body에 "refresh" : refresh_token 넣고 post 요청시 refresh_token이 blacklist됨
    # refresh token만 뺏음
    # access token도 뺏고싶음

    path('hello/', HelloView.as_view(), name='hello'), 
    # just for test
]