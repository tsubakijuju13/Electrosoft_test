from django.test import Client, TestCase
from django.urls import reverse
from django.contrib.auth.models import User

class TokenTests(TestCase):
    def setUp(self):
        User.objects.create_user('tsukiyama', password='eisc')

    def test_view_exist(self):
        res = self.client.get('/api/token/')
        self.assertEqual(res.status_code, 405)

    def test_view_post(self):
        data = {
            "username": "tsukiyama",
            "password": "eisc"
        }
        res = self.client.post(reverse('token_obtain_pair'), data, format='json')
        self.assertNotEqual(str(res.content, 'UTF-8'), '{"detail":"No active account found with the given credentials"}')
