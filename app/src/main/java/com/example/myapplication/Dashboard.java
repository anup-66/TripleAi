package com.example.myapplication;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class Dashboard extends Fragment {



    public Dashboard() {
        // Required empty public constructor
    }

    private RecyclerView recyclerView;
    private List<DataModel> modelList;
    private ItemAdapter itemAdapter;
    Map<String, Map<String, String>> map;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        map = new HashMap<>();
        String text = "As a new student eager to explore Python, " +
                "I'm looking for a structured learning pathway that takes me from basic concepts " +
                "to advanced topics. Provide a comprehensive guide covering key topics, recommended resources, " +
                "and suggested keywords for further exploration. Ensure that each section is filled with relevant content, " +
                "including descriptions, examples, recommended readings/articles, hands-on exercises/projects, and YouTube videos. " +
                "Also, predict the approximate timelines for each level of proficiency. " +
                "The YouTube links should be in the format of full video links (e.g., https://www.youtube.com/watch?v=7lmCu8wz8ro). " +
                "Ensure that no lists are empty and that the content is organized and consistent across all levels and also " +
                "the provided youtube links should word" +
                ", it won't be like opening the link it show error. Before providing the youtube links please check that youtube video is available.\n";
        gptCall(text +
                "{\n" +
                "    \"Introduction to [Interest/Field]\": {\n" +
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
                "}");
//        String text = "As a new student interested in python, I want to progress from basic concepts to advanced topics in a structured manner. Please provide me with a step-by-step learning pathway, covering key topics, recommended resources, and suggested keywords for further exploration.\n Provide me all the things in given format only and with no format empty. \n";
//        gptCall(text +
//                "{\n" +
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
//                "}");



        // Inflate the layout for this fragment
        view =  inflater.inflate(R.layout.fragment_dashboard, container, false);
        return view;
    }

    View view;




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
        Volley.newRequestQueue(getContext()).add(jsonObjectRequest);
    }


    public void dummy(){
//        System.out.println(output);

        try {
            JSONObject jsonObject = new JSONObject(output);

            Iterator<String> keys = jsonObject.keys();
            while (keys.hasNext()) {
                String key = keys.next();
//                System.out.println("Key: " + key);
                if(!map.containsKey(key)){
                    map.put(key, new HashMap<>());
                }

                Object value = jsonObject.get(key);
                if (value instanceof JSONObject) {
                    JSONObject innerObject = (JSONObject) value;
                    for (Iterator<String> innerKeys = innerObject.keys(); innerKeys.hasNext(); ) {

                        String innerKey = innerKeys.next();

//                        System.out.println("    Inner Key: " + innerKey);
//                        System.out.println("    Inner Value: " + preprocessURL(innerObject.get(innerKey).toString()));

                        Objects.requireNonNull(map.get(key)).put(innerKey, preprocessURL(innerObject.get(innerKey).toString()));
                    }
                } else if (value instanceof JSONArray) {
                    JSONArray innerArray = (JSONArray) value;
                    for (int i = 0; i < innerArray.length(); i++) {
                        JSONObject innerObject = innerArray.getJSONObject(i);
                        for (Iterator<String> innerKeys = innerObject.keys(); innerKeys.hasNext(); ) {
                            String innerKey = innerKeys.next();
//                            System.out.println("    Inner Key: " + innerKey);
//                            System.out.println("    Inner Value: " + preprocessURL(innerObject.get(innerKey).toString()));
                            Objects.requireNonNull(map.get(key)).put(innerKey, preprocessURL(innerObject.get(innerKey).toString()));
                        }
                    }
                }
            }
        } catch (JSONException e) {
            System.out.println(e+"---------------------------------------------ab yaha p nhi yaar");
        }







//        for (String i: map.keySet()) {
//            System.out.println(i + "--->" + map.get(i));
//        }



        recyclerView = view.findViewById(R.id.recycler_view_code);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));

        modelList = new ArrayList<>();

        for (String i: map.keySet()) {
            modelList.add(new DataModel(map.get(i), i));
//            System.out.println(i + "--->" + map.get(i));
        }

        itemAdapter = new ItemAdapter(getContext(), modelList);
        recyclerView.setAdapter(itemAdapter);

    }

    private static String preprocessURL(String url) {
        return url.replaceAll("\\\\", "");
    }
}