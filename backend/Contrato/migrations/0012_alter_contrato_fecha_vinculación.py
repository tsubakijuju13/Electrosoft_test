# Generated by Django 4.1.3 on 2023-01-03 03:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contrato', '0011_alter_contrato_fecha_vinculación'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contrato',
            name='fecha_vinculación',
            field=models.DateField(default=datetime.datetime(2023, 1, 3, 3, 1, 21, 440628, tzinfo=datetime.timezone.utc)),
        ),
    ]
