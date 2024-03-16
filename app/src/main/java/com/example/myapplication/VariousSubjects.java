package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;

import com.android.volley.AuthFailureError;
import com.android.volley.DefaultRetryPolicy;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.RetryPolicy;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class VariousSubjects extends AppCompatActivity {

    Button j1 , a1 , p1;
    Button search;
    EditText editText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_various_subjects);

        Window window = this.getWindow();
        window.setStatusBarColor(this.getResources().getColor(R.color.black));

        j1 = findViewById(R.id.button3);
        a1 = findViewById(R.id.button4);
        p1 = findViewById(R.id.button5);
        search = findViewById(R.id.button7);
        editText = findViewById(R.id.editTextText);
        String text  = editText.getText().toString();

        String prompt = "{\n" +
                "    \"Introduction to " + text +
                "Two Pointer Method\": {\n" +
                "         \"All Basic concepts and fundamentals\": [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"Recommended readings or articles\": [topic1:{link},topic2:{link},...],\n" +
                "        \"Keywords for further exploration\": []\n" +
                "         \"YouTube videos\": [\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"}\n" +
                "        ]\n" +
                "    },\n" +
                "    \"Foundational Knowledge\": {\n" +
                "        \"All Key principles and theories\": [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"All Core concepts and terminology\": [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"Hands-on exercises or projects for practice\": [topic1:{link},topic2:{link},...],\n" +
                "        \"Keywords for further exploration\": [],\n" +
                "        \"YouTube videos\": [\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"}\n" +
                "        ]\n" +
                "    },\n" +
                "    \"Intermediate Level\": {\n" +
                "        \"Deeper dive into specific subtopics\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"Advanced theories or methodologies\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"Case studies or real-world examples\": [topic1:{link},topic2:{link},...],\n" +
                "        \"Keywords for further exploration\": [],\n" +
                "        \"YouTube videos\": [\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"}\n" +
                "        ]\n" +
                "    },\n" +
                "    \"Advanced Level\": {\n" +
                "        \"Specialized topics or advanced techniques\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"Cutting-edge research or developments\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
                "        \"Opportunities for further exploration or specialization\": [topic1:{link},topic2:{link},...],\n" +
                "        \"Keywords for further exploration\": [],\n" +
                "        \"YouTube videos\": [\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"},\n" +
                "            {\"title\": \"\", \"link\": \"\"}\n" +
                "        ]\n" +
                "    },\n" +
                "    \"Predicted Timelines\": {\n" +
                "        \"Introductory Level\": \"\",\n" +
                "        \"Foundational Knowledge\": \"\",\n" +
                "        \"Intermediate Level\": \"\",\n" +
                "        \"Advanced Level\": \"\"\n" +
                "    }\n" +
                "}";




     
        editText = findViewById(R.id.editTextText);

        search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                gptCall(prompt);
            }
        });





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

    private String gptURL = "https://api.openai.com/v1/chat/completions";
    private String apiKey = "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";
    public String output = "";

    public void gptCall(String question){
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("model", "gpt-3.5-turbo");

            JSONArray jsonArrayMessage = new JSONArray();

            JSONObject jsonObjectMessage = new JSONObject();
            jsonObjectMessage.put("role", "user");
            jsonObjectMessage.put("content", question);

            jsonArrayMessage.put(jsonObjectMessage);

            jsonObject.put("messages", jsonArrayMessage);
        } catch (JSONException e) {
            System.out.println("---------------------------- exception1");
        }


        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, gptURL, jsonObject, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                String stringText = null;
                try {
                    stringText = response.
                            getJSONArray("choices").
                            getJSONObject(0).
                            getJSONObject("message").
                            getString("content");
                } catch (JSONException e) {
                    System.out.println("-------------------------------- Exception 2");
                }


                output = stringText.toString();
                System.out.println(output);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
            }
        }){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> mapHeader = new HashMap<>();
                mapHeader.put("Authorization", "Bearer "+apiKey);
                mapHeader.put("Content-Type", "application/json");
                return mapHeader;
            }

            @Override
            protected Response<JSONObject> parseNetworkResponse(NetworkResponse response) {
                return super.parseNetworkResponse(response);
            }
        };


        int timeOutPeriod = 120000; // 120 sec
        RetryPolicy retryPolicy = new DefaultRetryPolicy(timeOutPeriod,
                DefaultRetryPolicy.DEFAULT_MAX_RETRIES,
                DefaultRetryPolicy.DEFAULT_BACKOFF_MULT);

        jsonObjectRequest.setRetryPolicy(retryPolicy);
        Volley.newRequestQueue(getApplicationContext()).add(jsonObjectRequest);
    }
}