package com.example.myapplication;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class NestedAdapter extends RecyclerView.Adapter<NestedAdapter.NestedViewHolder> {
    List<String> mapKey;
    Map<String, String> mMap;
    Context context;

    public NestedAdapter(Context context, Map<String, String> mMap){
        this.mMap = mMap;
        this.mapKey = new ArrayList<>(mMap.keySet());
        this.context = context;
    }
    @NonNull
    @Override
    public NestedViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.nested_item, parent, false);
        return new NestedViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull NestedViewHolder holder, int position) {
        holder.mTv.setText(mapKey.get(position));
        holder.mTv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, Dummy.class);
                context.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return mMap.size();
    }

    public class NestedViewHolder extends RecyclerView.ViewHolder{
        private TextView mTv;
        public NestedViewHolder(@NonNull View itemView) {
            super(itemView);
            mTv = itemView.findViewById(R.id.nestedItemTv);
        }
    }
}
