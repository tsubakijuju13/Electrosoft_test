# Generated by Django 4.1.4 on 2023-01-02 19:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contrato', '0004_alter_contrato_fecha_vinculación'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contrato',
            name='fecha_vinculación',
            field=models.DateField(default=datetime.datetime(2023, 1, 2, 19, 56, 49, 472526, tzinfo=datetime.timezone.utc)),
        ),
    ]
