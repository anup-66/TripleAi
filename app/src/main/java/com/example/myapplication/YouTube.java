package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;


import android.graphics.Typeface;
import android.os.Bundle;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class YouTube extends AppCompatActivity {

//LinearLayout linearLayout;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_youtube);
        String data = getIntent().getStringExtra("data");

//        linearLayout = findViewById(R.id.linear_layout);
//        System.out.println(data);


        String[][] ans = null;


        try {
            JSONArray jsonArray = new JSONArray(data);
            int n = jsonArray.length();
            String[][] arr = new String[n][2];
            for (int i = 0; i < n; i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                String title = jsonObject.getString("title");
                String link = jsonObject.getString("link");
                arr[i][0] = title;
                arr[i][1] = link;
                System.out.println("Title: " + title);
                System.out.println("Link: " + link);
                System.out.println(link.substring(32));
            }

            ans = arr;
        } catch (JSONException e) {
            e.printStackTrace();
        }

        if (ans != null) {
            String videoId = "";
            videoId = ans[0][1].substring(32);
            String stringJavaScript = "<!DOCTYPE html>\n" +
                    "<html>\n" +
                    "  <body>\n" +
                    "    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->\n" +
                    "    <div id=\"player\"></div>\n" +
                    "\n" +
                    "    <script>\n" +
                    "      // 2. This code loads the IFrame Player API code asynchronously.\n" +
                    "      var tag = document.createElement('script');\n" +
                    "\n" +
                    "      tag.src = \"https://www.youtube.com/iframe_api\";\n" +
                    "      var firstScriptTag = document.getElementsByTagName('script')[0];\n" +
                    "      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n" +
                    "\n" +
                    "      // 3. This function creates an <iframe> (and YouTube player)\n" +
                    "      //    after the API code downloads.\n" +
                    "      var player;\n" +
                    "      function onYouTubeIframeAPIReady() {\n" +
                    "        player = new YT.Player('player', {\n" +
                    "          height: '195',\n" +
                    "          width: '320',\n" +
                    "          videoId: '" +
                    videoId +
                    "',\n" +
                    "          playerVars: {\n" +
                    "            'playsinline': 1\n" +
                    "          },\n" +
                    "          events: {\n" +
                    "            'onReady': onPlayerReady,\n" +
                    "            'onStateChange': onPlayerStateChange\n" +
                    "          }\n" +
                    "        });\n" +
                    "      }\n" +
                    "\n" +
                    "      // 4. The API will call this function when the video player is ready.\n" +
                    "      function onPlayerReady(event) {\n" +
                    "        event.target.playVideo();\n" +
                    "      }\n" +
                    "\n" +
                    "      // 5. The API calls this function when the player's state changes.\n" +
                    "      //    The function indicates that when playing a video (state=1),\n" +
                    "      //    the player should play for six seconds and then stop.\n" +
                    "      var done = false;\n" +
                    "      function onPlayerStateChange(event) {\n" +
                    "        if (event.data == YT.PlayerState.PLAYING && !done) {\n" +
                    "          setTimeout(stopVideo, 10000);\n" +
                    "          done = true;\n" +
                    "        }\n" +
                    "      }\n" +
                    "      function stopVideo() {\n" +
                    "        player.stopVideo();\n" +
                    "      }\n" +
                    "    </script>\n" +
                    "  </body>\n" +
                    "</html>";


            TextView t = findViewById(R.id.textView);
            t.setText(ans[0][0]);
            WebView webView = findViewById(R.id.webView);
            webView.getSettings().setJavaScriptEnabled(true);
            webView.loadData(stringJavaScript, "text/html", "utf-8");
        }


    }
}