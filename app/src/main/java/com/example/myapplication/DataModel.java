package com.example.myapplication;

import java.util.Map;

public class DataModel {
    private Map<String, String> nestedMap;
    private String itemText;
    private boolean isExpandable;

    public DataModel(Map<String, String> nestedMap, String itemText) {
        this.nestedMap = nestedMap;
        this.itemText = itemText;
        isExpandable = false;
    }

    public void setExpandable(boolean expandable) {
        isExpandable = expandable;
    }

    public Map<String, String> getNestedMap() {
        return nestedMap;
    }

    public String getItemText() {
        return itemText;
    }

    public boolean isExpandable() {
        return isExpandable;
    }
}
