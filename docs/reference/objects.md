---
id: objects
title: Objects
slug: objects
sidebar_position: 4
---

## AddKeyToClientMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
client<br />
<a href="/docs/reference/objects#client"><code>Client</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Amount



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
value<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetCode<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetScale<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ApiKey



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
key<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
updatedAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Asset



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scale<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
withdrawalThreshold<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AssetEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#asset"><code>Asset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AssetMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/objects#asset"><code>Asset</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AssetsConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#assetedge"><code>[AssetEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Client



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
name<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
uri<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
image<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
email<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
keys<br />
<a href="/docs/reference/objects#clientkeys"><code>[ClientKeys!]!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## ClientKeys



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
clientId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
jwk<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateApiKeyMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
apiKey<br />
<a href="/docs/reference/objects#apikey"><code>ApiKey</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateClientMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
client<br />
<a href="/docs/reference/objects#client"><code>Client</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointer<br />
<a href="/docs/reference/objects#paymentpointer"><code>PaymentPointer</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePeerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
peer<br />
<a href="/docs/reference/objects#peer"><code>Peer</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## DeleteAllApiKeysMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## DeletePeerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Http



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
outgoing<br />
<a href="/docs/reference/objects#httpoutgoing"><code>HttpOutgoing!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## HttpOutgoing



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
authToken<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
endpoint<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPayment



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
state<br />
<a href="/docs/reference/enums#incomingpaymentstate"><code>IncomingPaymentState!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
incomingAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receivedAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPaymentConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#incomingpaymentedge"><code>[IncomingPaymentEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPaymentEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#incomingpayment"><code>IncomingPayment!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## IncomingPaymentResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
payment<br />
<a href="/docs/reference/objects#incomingpayment"><code>IncomingPayment</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## LiquidityMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
error<br />
<a href="/docs/reference/enums#liquidityerror"><code>LiquidityError</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPayment



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
state<br />
<a href="/docs/reference/enums#outgoingpaymentstate"><code>OutgoingPaymentState!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
error<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
stateAttempts<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sendAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiveAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiver<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
quote<br />
<a href="/docs/reference/objects#quote"><code>Quote</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sentAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPaymentConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#outgoingpaymentedge"><code>[OutgoingPaymentEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPaymentEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#outgoingpayment"><code>OutgoingPayment!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## OutgoingPaymentResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
payment<br />
<a href="/docs/reference/objects#outgoingpayment"><code>OutgoingPayment</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PageInfo



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
endCursor<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating forwards: the cursor to continue.</p>
</td>
</tr>
<tr>
<td>
hasNextPage<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Paginating forwards: Are there more pages?</p>
</td>
</tr>
<tr>
<td>
hasPreviousPage<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>
<p>Paginating backwards: Are there more pages?</p>
</td>
</tr>
<tr>
<td>
startCursor<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>
<p>Paginating backwards: the cursor to continue.</p>
</td>
</tr>
</tbody>
</table>

## PaymentPointer



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/objects#asset"><code>Asset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
url<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
publicName<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
incomingPayments<br />
<a href="/docs/reference/objects#incomingpaymentconnection"><code>IncomingPaymentConnection</code></a>
</td>
<td>


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

</td>
</tr>
<tr>
<td>
quotes<br />
<a href="/docs/reference/objects#quoteconnection"><code>QuoteConnection</code></a>
</td>
<td>


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

</td>
</tr>
<tr>
<td>
outgoingPayments<br />
<a href="/docs/reference/objects#outgoingpaymentconnection"><code>OutgoingPaymentConnection</code></a>
</td>
<td>


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

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PaymentPointerWithdrawal



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointer<br />
<a href="/docs/reference/objects#paymentpointer"><code>PaymentPointer!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PaymentPointerWithdrawalMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
error<br />
<a href="/docs/reference/enums#liquidityerror"><code>LiquidityError</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
withdrawal<br />
<a href="/docs/reference/objects#paymentpointerwithdrawal"><code>PaymentPointerWithdrawal</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Peer



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [Model](/docs/reference/interfaces#model)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
http<br />
<a href="/docs/reference/objects#http"><code>Http!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/objects#asset"><code>Asset!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
staticIlpAddress<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PeerEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#peer"><code>Peer!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## PeersConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#peeredge"><code>[PeerEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Quote



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#id"><code>ID!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiver<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sendAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiveAmount<br />
<a href="/docs/reference/objects#amount"><code>Amount!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
minExchangeRate<br />
<a href="/docs/reference/scalars#float"><code>Float!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
lowEstimatedExchangeRate<br />
<a href="/docs/reference/scalars#float"><code>Float!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
highEstimatedExchangeRate<br />
<a href="/docs/reference/scalars#float"><code>Float!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
createdAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## QuoteConnection



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
pageInfo<br />
<a href="/docs/reference/objects#pageinfo"><code>PageInfo!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
edges<br />
<a href="/docs/reference/objects#quoteedge"><code>[QuoteEdge!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## QuoteEdge



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
node<br />
<a href="/docs/reference/objects#quote"><code>Quote!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
cursor<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## QuoteResponse



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
quote<br />
<a href="/docs/reference/objects#quote"><code>Quote</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RedeemApiKeyMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
session<br />
<a href="/docs/reference/objects#session"><code>Session</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RefreshSessionMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
session<br />
<a href="/docs/reference/objects#session"><code>Session</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RevokeClientKeyMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
keyId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RevokeSessionMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## Session



<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
key<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## TransferMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## TriggerPaymentPointerEventsMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
count<br />
<a href="/docs/reference/scalars#int"><code>Int</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## UpdatePeerMutationResponse



<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>

- [MutationResponse](/docs/reference/interfaces#mutationresponse)

<p style={{ marginBottom: "0.4em" }}><strong>Fields</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
success<br />
<a href="/docs/reference/scalars#boolean"><code>Boolean!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
message<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
peer<br />
<a href="/docs/reference/objects#peer"><code>Peer</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

