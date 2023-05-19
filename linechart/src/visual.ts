import * as d3 from "d3";
import powerbi from "powerbi-visuals-api";
import {
  IVisual,
  VisualConstructorOptions,
  VisualUpdateOptions,
} from "powerbi-visuals-api";

export class Visual implements IVisual {
  private target: HTMLElement;
  private updateCount: number;
  private textNode: Text;
  private color: string;
  private thickness: number;

  constructor(options: VisualConstructorOptions) {
    console.log("Visual constructor", options);
    this.target = options.element;
    this.updateCount = 0;
    this.color = "steelblue"; // Default color value
    this.thickness = 2; // Default thickness value
    if (document) {
      const new_p: HTMLElement = document.createElement("p");
      new_p.appendChild(document.createTextNode("Update count:"));
      const new_em: HTMLElement = document.createElement("em");
      this.textNode = document.createTextNode(this.updateCount.toString());
      new_em.appendChild(this.textNode);
      new_p.appendChild(new_em);
      this.target.appendChild(new_p);
    }
  }

  public update(options: VisualUpdateOptions) {
    console.log("Visual update", options);

    const data = options.dataViews[0].table.rows; // Replace this with the actual data source for the Line Chart

    // Remove the existing elements in the target element
    d3.select(this.target).selectAll("*").remove();

    // Create the SVG container
    const svg = d3
      .select(this.target)
      .append("svg")
      .attr("width", options.viewport.width)
      .attr("height", options.viewport.height);

    // Add your code here to create the Line Chart using D3 and the provided data
    // Use this.color and this.thickness to set the color and thickness of the line

    if (this.textNode) {
      this.textNode.textContent = (this.updateCount++).toString();
    }
  }
}
