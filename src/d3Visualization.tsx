import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface Node {
  id: string;
}

interface Link {
  source: string;
  target: string;
}

const D3Visualization = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Sample data
    const nodes: Node[] = [
      { id: '.rating' },
      { id: '.rating-container' },
      { id: '.rating-users' },
      { id: '.rating-users-item' },
      { id: '.rating-users-item-active' },
    ];

    const links: Link[] = [
      { source: '.rating', target: '.rating-container' },
      { source: '.rating-container', target: '.rating-users' },
      { source: '.rating-users', target: '.rating-users-item' },
      { source: '.rating-users-item', target: '.rating-users-item-active' },
    ];

    // Dimensions
    const width = 800;
    const height = 600;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    // Create simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3.forceLink(links).id((d: any) => d.id)
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Append SVG
    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);

    // Draw links
    const link = svg
      .append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#999');

    // Draw nodes
    const node = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 10)
      .attr('fill', '#69b3a2');

    // Update positions on each tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
    });
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default D3Visualization;