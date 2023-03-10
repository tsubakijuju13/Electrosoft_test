# Generated by Django 4.1.4 on 2022-12-30 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('user_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=30)),
                ('apellido', models.CharField(max_length=30)),
                ('role', models.CharField(default='cliente', max_length=20)),
                ('identificacion', models.CharField(max_length=20, unique=True)),
                ('direccion', models.TextField(max_length=20)),
                ('ciudad', models.CharField(default='Cali', max_length=20)),
                ('barrio', models.CharField(max_length=20)),
                ('telefono', models.CharField(default='0000000000', max_length=20)),
                ('email', models.EmailField(max_length=40, unique=True)),
            ],
            options={
                'db_table': 'Usuarios',
            },
        ),
    ]
