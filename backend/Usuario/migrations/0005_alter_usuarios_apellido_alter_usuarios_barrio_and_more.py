# Generated by Django 4.1.3 on 2023-01-28 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0004_remove_usuarios_auth_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='apellido',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='barrio',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='ciudad',
            field=models.CharField(default='Cali', max_length=100),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='direccion',
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='email',
            field=models.EmailField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='identificacion',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='role',
            field=models.CharField(default='cliente', max_length=100),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='telefono',
            field=models.CharField(default='0000000000', max_length=100),
        ),
    ]
