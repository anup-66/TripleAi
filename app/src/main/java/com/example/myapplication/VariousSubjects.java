package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.drawerlayout.widget.DrawerLayout;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.widget.Button;

import com.google.android.material.navigation.NavigationView;

public class VariousSubjects extends AppCompatActivity {

    Button j1 , a1 , p1;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_various_subjects);

        Window window = this.getWindow();
        window.setStatusBarColor(this.getResources().getColor(R.color.black));

        j1 = findViewById(R.id.button3);
        a1 = findViewById(R.id.button4);
        p1 = findViewById(R.id.button5);


        j1.setOnClickListener((view -> startActivity(new Intent(VariousSubjects.this , JavaFrame.class))));
        a1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(VariousSubjects.this,AIMLFrame.class);
                startActivity(intent);
            }
        });
        p1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(VariousSubjects.this , PythonFrame.class);
                startActivity(intent);
            }
        });
    }
}