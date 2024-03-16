package com.example.myapplication;

import android.graphics.Color;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CalendarView;
import android.widget.Toast;

import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.PieEntry;

import java.util.ArrayList;


public class Performance extends Fragment {
    public Performance() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_performance, container, false);

        PieChart pieChart = view.findViewById(R.id.pieChart);

        ArrayList<PieEntry> entries = new ArrayList<>();
        entries.add(new PieEntry(20f, "Python"));
        entries.add(new PieEntry(30f, "AI/ML"));
        entries.add(new PieEntry(50f, "Java"));

        PieDataSet dataSet = new PieDataSet(entries, "Courses");
        dataSet.setColors(Color.BLUE, Color.GREEN, Color.RED);

        PieData data = new PieData(dataSet);
        pieChart.setData(data);
        pieChart.invalidate();
        return  view;


        // Inflate the layout for this fragment
    }
}