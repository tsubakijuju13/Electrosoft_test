# Generated by Django 4.1.3 on 2023-01-28 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Contrato', '0020_alter_contrato_fecha_vinculación'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contrato',
            name='fecha_vinculación',
            field=models.DateField(auto_now=True),
        ),
    ]
