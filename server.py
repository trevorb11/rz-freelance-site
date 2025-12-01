#!/usr/bin/env python3
"""
Simple HTTP server for Rank Zone static website
Serves files from the current directory on port 5000
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    """HTTP request handler with cache control disabled"""
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server(port=5000, host='0.0.0.0'):
    """Run the HTTP server"""
    server_address = (host, port)
    httpd = HTTPServer(server_address, NoCacheHTTPRequestHandler)
    print(f'Starting server on {host}:{port}...')
    print(f'Visit http://{host}:{port} to view the site')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
