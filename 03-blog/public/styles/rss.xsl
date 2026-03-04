<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body { font-family: system-ui, sans-serif; background: #111827; color: #f9fafb; max-width: 800px; margin: 0 auto; padding: 2rem 1rem; }
          h1 { font-size: 2rem; margin-bottom: 0.25rem; }
          p.desc { color: #9ca3af; margin-top: 0; }
          a { color: #60a5fa; }
          .badge { display: inline-block; background: #f97316; color: #fff; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 1.5rem; }
          ul { list-style: none; padding: 0; }
          li { border-top: 1px solid #374151; padding: 1rem 0; }
          li h2 { margin: 0 0 0.25rem; font-size: 1.1rem; }
          li time { font-size: 0.8rem; color: #6b7280; }
          li p { margin: 0.5rem 0 0; color: #d1d5db; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <span class="badge">RSS Feed</span>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
        <p><a><xsl:attribute name="href"><xsl:value-of select="/rss/channel/link"/></xsl:attribute>Visit site &#x2192;</a></p>
        <ul>
          <xsl:for-each select="/rss/channel/item">
            <li>
              <h2><a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a></h2>
              <time><xsl:value-of select="pubDate"/></time>
              <p><xsl:value-of select="description"/></p>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
