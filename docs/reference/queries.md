---
id: queries
title: Queries
slug: queries
sidebar_position: 1
---

## asset

**Type:** [Asset](/docs/reference/objects#asset)

Fetch an asset

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## assets

**Type:** [AssetsConnection!](/docs/reference/objects#assetsconnection)

Fetch a page of assets.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor before the the requested page.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor after the the requested page.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating forwards: The first <strong>n</strong> elements from the page.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating backwards: The last <strong>n</strong> elements from the page.</p>
</td>
</tr>
</tbody>
</table>

## incomingPayment

**Type:** [IncomingPayment](/docs/reference/objects#incomingpayment)

Fetch an Open Payments incoming payment

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## outgoingPayment

**Type:** [OutgoingPayment](/docs/reference/objects#outgoingpayment)

Fetch an Open Payments outgoing payment

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## paymentPointer

**Type:** [PaymentPointer](/docs/reference/objects#paymentpointer)

Fetch a payment pointer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## peer

**Type:** [Peer](/docs/reference/objects#peer)

Fetch a peer

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## peers

**Type:** [PeersConnection!](/docs/reference/objects#peersconnection)

Fetch a page of peers.

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
after<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor before the the requested page.</p>
</td>
</tr>
<tr>
<td>
before<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor after the the requested page.</p>
</td>
</tr>
<tr>
<td>
first<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating forwards: The first <strong>n</strong> elements from the page.</p>
</td>
</tr>
<tr>
<td>
last<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>
<p>Paginating backwards: The last <strong>n</strong> elements from the page.</p>
</td>
</tr>
</tbody>
</table>

## quote

**Type:** [Quote](/docs/reference/objects#quote)

Fetch an Open Payments quote

<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

