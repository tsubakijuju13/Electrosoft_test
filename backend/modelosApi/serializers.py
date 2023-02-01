from dataclasses import fields
from enum import unique
from rest_framework import serializers
from .models import *
import json

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    '''def to_representation(self, instance):
        return instance.toJSON()'''

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

# class JujuSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Juju
#         fields = '__all__'


# class ChangeAge_juju(serializers.Serializer):
#     age = serializers.CharField(max_length=20)

#     def validate(self, data):
#         if int(data['age']) < 18:
#             raise serializers.ValidationError({'age': 'no puede ser un menor de edad'})
#         return data

# class change_email(serializers.Serializer):
#     email = serializers.EmailField(max_length=50)

#     def validate(self, data):
#         if data['email'] == "":
#             raise serializers.ValidationError({'email': 'Este campo no puede estar vacio'})

#         return data