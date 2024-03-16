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
import java.util.Iterator;
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






























//        String text  = "";
//        String prompt = "{As a new student interested in" + text +
//                ", I want to progress from basic concepts to advanced topics in a structured manner. Please provide me with a step-by-step learning pathway, covering key topics, recommended resources, and suggested keywords for further exploration.\\n Provide me all the things in given format only.\n" +
//                "    \"Introduction to [Interest/Field]\": {\n" +
//                "         \"All Basic concepts and fundamentals\": [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"Recommended readings or articles\": [topic1:{link},topic2:{link},...],\n" +
//                "        \"Keywords for further exploration\": []\n" +
//                "         \"YouTube videos\": [\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"}\n" +
//                "        ]\n" +
//                "    },\n" +
//                "    \"Foundational Knowledge\": {\n" +
//                "        \"All Key principles and theories\": [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"All Core concepts and terminology\": [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"Hands-on exercises or projects for practice\": [topic1:{link},topic2:{link},...],\n" +
//                "        \"Keywords for further exploration\": [],\n" +
//                "        \"YouTube videos\": [\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"}\n" +
//                "        ]\n" +
//                "    },\n" +
//                "    \"Intermediate Level\": {\n" +
//                "        \"Deeper dive into specific subtopics\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"Advanced theories or methodologies\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"Case studies or real-world examples\": [topic1:{link},topic2:{link},...],\n" +
//                "        \"Keywords for further exploration\": [],\n" +
//                "        \"YouTube videos\": [\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"}\n" +
//                "        ]\n" +
//                "    },\n" +
//                "    \"Advanced Level\": {\n" +
//                "        \"Specialized topics or advanced techniques\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"Cutting-edge research or developments\":  [topic1:{description:\"\" , example: {with proper code examples}},topic2:{description:\"\" , example: {with proper code examples}},...],\n" +
//                "        \"Opportunities for further exploration or specialization\": [topic1:{link},topic2:{link},...],\n" +
//                "        \"Keywords for further exploration\": [],\n" +
//                "        \"YouTube videos\": [\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"},\n" +
//                "            {\"title\": \"\", \"link\": \"\"}\n" +
//                "        ]\n" +
//                "    },\n" +
//                "    \"Predicted Timelines\": {\n" +
//                "        \"Introductory Level\": \"\",\n" +
//                "        \"Foundational Knowledge\": \"\",\n" +
//                "        \"Intermediate Level\": \"\",\n" +
//                "        \"Advanced Level\": \"\"\n" +
//                "    }\n" +
//                "}";






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
                dummy();
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


    public void dummy(){
        System.out.println(output);

        try {
            JSONObject jsonObject = new JSONObject(output);

            Iterator<String> keys = jsonObject.keys();
            while (keys.hasNext()) {
                String key = keys.next();
                System.out.println("Key: " + key);

                Object value = jsonObject.get(key);
                if (value instanceof JSONObject) {
                    JSONObject innerObject = (JSONObject) value;
                    for (Iterator<String> innerKeys = innerObject.keys(); innerKeys.hasNext(); ) {
                        String innerKey = innerKeys.next();
                        System.out.println("    Inner Key: " + innerKey);
                        System.out.println("    Inner Value: " + preprocessURL(innerObject.get(innerKey).toString()));
                    }
                } else if (value instanceof JSONArray) {
                    JSONArray innerArray = (JSONArray) value;
                    for (int i = 0; i < innerArray.length(); i++) {
                        JSONObject innerObject = innerArray.getJSONObject(i);
                        for (Iterator<String> innerKeys = innerObject.keys(); innerKeys.hasNext(); ) {
                            String innerKey = innerKeys.next();
                            System.out.println("    Inner Key: " + innerKey);
                            System.out.println("    Inner Value: " + preprocessURL(innerObject.get(innerKey).toString()));
                        }
                    }
                }
            }
        } catch (JSONException e) {
            System.out.println("---------------------------------------------ab yaha p nhi yaar");
        }
    }

    private static String preprocessURL(String url) {
        return url.replaceAll("\\\\", "");
    }
}