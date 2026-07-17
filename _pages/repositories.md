---
layout: page
permalink: /repositories/
title: repositories
description:
nav: true
nav_order: 3
---

<style>
  .repositories {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
  }
  .repo-card {
    display: block;
    flex: 1 1 260px;
    max-width: 360px;
    padding: 1rem 1.2rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background-color: var(--global-card-bg-color);
    color: var(--global-text-color) !important;
    text-decoration: none !important;
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }
  .repo-card:hover {
    border-color: #3eb489;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
  .repo-card-title {
    font-weight: 600;
    color: #3eb489;
    margin-bottom: 0.4rem;
    word-break: break-word;
  }
  .repo-card-title i {
    margin-right: 0.4rem;
  }
  .repo-card-owner {
    color: var(--global-text-color-light);
    font-weight: 400;
  }
  .repo-card-desc {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.75rem;
  }
  .repo-card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
  }
  .repo-lang-dot {
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin-right: 0.35rem;
    vertical-align: -1px;
  }
</style>

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_repos %}
<div class="repositories">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}
