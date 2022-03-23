//@ts-check

import { extractBounds } from "../test";

/*
//sample xml
<hierarchy rotation="0">
<node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2215]">
<node index="0" text="" resource-id="" class="android.widget.LinearLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2215]">
<node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][1080,2215]">
<node index="0" text="" resource-id="com.avail.easyloans.android:id/action_bar_root" class="android.widget.LinearLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][1080,2215]">
<node index="0" text="" resource-id="android:id/content" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][1080,2215]">
<node index="0" text="" resource-id="com.avail.easyloans.android:id/fl_container_activation_steps" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][1080,2215]">
<node index="0" text="" resource-id="com.avail.easyloans.android:id/activateCreditATM" class="android.view.ViewGroup" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][1080,2215]">
<node index="0" text="" resource-id="com.avail.easyloans.android:id/cl_heading" class="android.view.ViewGroup" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][1080,445]">
<node NAF="true" index="0" text="" resource-id="com.avail.easyloans.android:id/btn_back" class="android.widget.ImageButton" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,80][141,215]"/>
<node index="1" text="Activate CreditATM" resource-id="com.avail.easyloans.android:id/tv_title_activate_credit_atm" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[60,260][1080,370]"/>
</node>
<node index="1" text="" resource-id="com.avail.easyloans.android:id/rv_activation_steps_list" class="androidx.recyclerview.widget.RecyclerView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,445][1080,2215]">
<node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,445][1080,789]">
<node index="0" text="" resource-id="com.avail.easyloans.android:id/iv_correct_completed" class="android.widget.ImageView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,591][96,642]"/>
<node index="1" text="" resource-id="" class="android.view.ViewGroup" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[75,475][1050,759]">
<node index="0" text="Complete KYC" resource-id="com.avail.easyloans.android:id/tv_title_completed" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[168,562][889,621]"/>
<node index="1" text="Completed" resource-id="com.avail.easyloans.android:id/tv_sub_title_completed" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[168,621][889,673]"/>
<node index="2" text="" resource-id="com.avail.easyloans.android:id/iv_mark_completed" class="android.widget.ImageView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[937,583][1005,651]"/>
</node>
</node>
<node index="1" text="" resource-id="" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,789][1080,1133]">
<node index="0" text="2" resource-id="com.avail.easyloans.android:id/tv_index_start" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,927][113,995]"/>
<node index="1" text="" resource-id="" class="android.view.ViewGroup" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[75,819][1050,1103]">
<node index="0" text="Enter Bank Details" resource-id="com.avail.easyloans.android:id/tv_title_start" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[168,906][760,965]"/>
<node index="1" text="Takes 1 minute" resource-id="com.avail.easyloans.android:id/tv_sub_title_start" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[165,965][763,1017]"/>
<node index="2" text="START" resource-id="com.avail.easyloans.android:id/tv_start" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[808,935][937,987]"/>
<node index="3" text="" resource-id="com.avail.easyloans.android:id/iv_start" class="android.widget.ImageView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[937,927][1005,995]"/>
</node>
</node>
<node index="2" text="" resource-id="" class="android.widget.FrameLayout" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,1133][1080,1468]">
<node index="0" text="3" resource-id="com.avail.easyloans.android:id/tv_index_lock" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1266][113,1334]"/>
<node index="1" text="" resource-id="" class="android.view.ViewGroup" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[75,1163][1050,1438]">
<node index="0" text="Accept Final Offer" resource-id="com.avail.easyloans.android:id/tv_title_lock" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[168,1250][912,1309]"/>
<node index="1" text="Complete earlier steps first" resource-id="com.avail.easyloans.android:id/tv_sub_title_lock" class="android.widget.TextView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[165,1309][915,1361]"/>
<node index="2" text="" resource-id="com.avail.easyloans.android:id/iv_lock" class="android.widget.ImageView" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[960,1271][1005,1330]"/>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
<node index="1" text="" resource-id="android:id/statusBarBackground" class="android.view.View" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,80]"/>
<node index="2" text="" resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.avail.easyloans.android" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][0,0]"/>
</node>
</hierarchy>
*/

/**
 *@typedef {Object} Node
    *@property {number} index
    *@property {string} text
    *@property {string} resourceId
    *@property {string} class
    *@property {string} package
    *@property {string} contentDesc
    *@property {boolean} checkable
    *@property {boolean} checked
    *@property {boolean} clickable
    *@property {boolean} enabled
    *@property {boolean} focusable
    *@property {boolean} focused
    *@property {boolean} scrollable
    *@property {boolean} longClickable
    *@property {boolean} password
    *@property {boolean} selected
    *@property {{
        x1: number,
        y1: number,
        x2: number,
        y2: number
    }} bounds
 */

/**
 *
 * @param {string} xml
 * @returns {Node[]}
 */
export const getJSONFromXML = (xml) => {
  if (!xml) return;
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const nodes = doc.getElementsByTagName("node");
  const values = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const index = node.getAttribute("index");
    const text = node.getAttribute("text");
    const resourceId = node.getAttribute("resource-id");
    const className = node.getAttribute("class");
    const packageName = node.getAttribute("package");
    const contentDesc = node.getAttribute("content-desc");
    const checkable = node.getAttribute("checkable");
    const checked = node.getAttribute("checked");
    const clickable = node.getAttribute("clickable");
    const enabled = node.getAttribute("enabled");
    const focusable = node.getAttribute("focusable");
    const focused = node.getAttribute("focused");
    const scrollable = node.getAttribute("scrollable");
    const longClickable = node.getAttribute("long-clickable");
    const password = node.getAttribute("password");
    const selected = node.getAttribute("selected");
    const rawBounds = node.getAttribute("bounds");
    const bounds = extractBounds(rawBounds);
    values.push({
      index,
      text,
      resourceId,
      className,
      packageName,
      contentDesc,
      checkable,
      checked,
      clickable,
      enabled,
      focusable,
      focused,
      scrollable,
      longClickable,
      password,
      selected,
      bounds,
    });
  }
  //@ts-ignore
  return values;
};

export const height = (coords)=>{
    return coords.y2 - coords.y1;
}
export const width = (coords)=>{
    return coords.x2 - coords.x1;
}

/**
 *
 * @param {{
 * x:number,
 * y:number,
 * }} coords
 * @param {Node[]} nodes
 */
export const getClosest = (coords, nodes) => {
    const filtered = nodes.filter((node) => {
        const { x1, y1, x2, y2 } = node.bounds;
        return (
            coords.x >= x1 &&
            coords.x <= x2 &&
            coords.y >= y1 &&
            coords.y <= y2
        );
        }
    );

 

//find in filtered node whose width and height are the smallest
    const smallest = filtered.reduce((prev, curr)=>{
        const prevHeight = height(prev.bounds);
        const prevWidth = width(prev.bounds);
        const currHeight = height(curr.bounds);
        const currWidth = width(curr.bounds);
        if(prevHeight < currHeight && prevWidth < currWidth){
            return prev;
        }
        if(prevHeight < currHeight && prevWidth > currWidth){
            return curr;
        }
        if(prevHeight > currHeight && prevWidth < currWidth){
            return prev;
        }
        if(prevHeight > currHeight && prevWidth > currWidth){
            return curr;
        }
        return prev;
    }, filtered[0]);

    return smallest;
};

export const getRandomColor = ()=>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
